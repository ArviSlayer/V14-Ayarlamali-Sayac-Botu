const Discord = require('discord.js');
const { PermissionsBitField } = require("discord.js")
const ArvisDB = require("croxydb");
module.exports = {
    name: "hoşgeldin-sistemi",
    description: "Hoş Geldin Sistemini Ayarlamanızı Sağlar",// ArviS#0011
    type: 1,// ArviS#0011
    options: [// ArviS#0011
        {// ArviS#0011
            name: "kanal",
            description: "Hoş Geldin Kanalını Ayarlamanızı Sağlar",
            type: 7,// ArviS#0011
            required: true,
            channel_types: [0]// ArviS#0011
        },
// ArviS#0011
        {
            name: "giris-mesaj",
            description: "Hoş Geldin Kanalına Atılacak Giriş Mesajını Ayarlamanızı Sağlar",
            type: 3,
            required: false
        },// ArviS#0011

        {
            name: "cikis-mesaj",
            description: "Hoş Geldin Kanalına Atılacak Çıkış Mesajını Ayarlamanızı Sağlar",
            type: 3,
            required: false
        }
    ],
    run: async (client, interaction) => {// ArviS#0011

        const row = new Discord.ActionRowBuilder()// ArviS#0011

            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("🔐")
                    .setLabel("Sistemi Kapat")
                    .setStyle(Discord.ButtonStyle.Danger)
                    .setCustomId("kapat")
            )

        const row1 = new Discord.ActionRowBuilder()

            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("👀")
                    .setLabel("Mesajı Göster")
                    .setStyle(Discord.ButtonStyle.Primary)
                    .setCustomId("goster")
            )

            .addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji("🔐")
                    .setLabel("Sistemi Kapat")
                    .setStyle(Discord.ButtonStyle.Danger)// ArviS#0011
                    .setCustomId("kapat1")
            )

        const embed = new Discord.EmbedBuilder()
            .setTitle("Yetkin Yok")
            .setDescription("Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Lazım")
            .setFooter({ text: "ArviS#0011" })
            .setColor("Red")

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({ embeds: [embed], ephemeral: true })

        const gMesaj = interaction.options.getString('giris-mesaj')
        const cMesaj = interaction.options.getString('cikis-mesaj')// ArviS#0011
        const kanal = interaction.options.getChannel('kanal')// ArviS#0011

        ArvisDB.set(`hgbb_${interaction.guild.id}`, kanal.id)
        ArvisDB.set(`hgbbCikisMesaj_${interaction.guild.id}`, cMesaj)// ArviS#0011
        ArvisDB.set(`hgbbGirisMesaj_${interaction.guild.id}`, gMesaj)// ArviS#0011
// ArviS#0011
        const kanalEmbed = new Discord.EmbedBuilder()
            .setTitle("Başarıyla Ayarlandı")
            .setDescription("Hoş Geldin Sistemi Başarıyla Ayarlandı")
            .setFooter({ text: "ArviS#0011" })
            .setColor("Green")

        if (gMesaj, cMesaj) return interaction.reply({ embeds: [kanalEmbed], components: [row1] })
        if (!gMesaj, !cMesaj) return interaction.reply({ embeds: [kanalEmbed], components: [row1] })
    }// ArviS#0011
};// ArviS#0011
// ArviS#0011

// ArviS#0011






// ArviS#0011
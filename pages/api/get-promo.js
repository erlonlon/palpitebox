import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_GOOGLESPREADS)

const fromBase64 = value => {
  const buff = Buffer.from(value, 'base64');
  return buff.toString('ascii');
}

export default async (req, res) => {
  try {

    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLINTE_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const mostrarPromocaoCell = sheet.getCell(1, 0)
    const textoPromocaoCell = sheet.getCell(1, 1)


    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoPromocaoCell.value
    }))


  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))

  }


}
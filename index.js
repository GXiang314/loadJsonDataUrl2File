const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2)
const nameIndex = args.indexOf('--filename');
const filename = nameIndex !== -1 ? args[nameIndex + 1] : null;
const res_bytes = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
const res = JSON.parse(res_bytes);

function dataURLtoFile(dataurl, filename, ext) {
    const buf = Buffer.from(dataurl.split(',')[1], 'base64');
    const dir = 'dataurl2File_' + new Date().toISOString().slice(0, 10);
    fs.mkdir(path.join(__dirname, dir), { recursive: true }, (err) => {
        if (err) throw err;
    });
    fs.writeFileSync(path.join(__dirname, dir, filename + `.${ext}`), buf);
}

res.forEach((item) => {
    const dataurl = `data:${item.media_type};base64,${item.resource_content}`;
    dataURLtoFile(dataurl, item.resource_name, item.extension);
    console.log(`${item.resource_name} done`);
});

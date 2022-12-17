const yaml = require('js-yaml');
const fs = require('fs');

const input_file_name : string = process.argv[2];
const output_file_name: string = process.argv[3];
const optional_file_name: string = process.argv[4];

//ファイルの存在確認
function read_file(filename: string) : boolean{
  let res = false;
  if (fs.existsSync(filename)) {
    res = true;
  }else{
    console.log('Error: File is not found.\nFilename: %s', filename);
  }
  return res;
}

(function(){

  if(!read_file(input_file_name)) return false;
  if(!read_file(output_file_name)) return false;

  try {
    //ファイルの読み込み
    const doc1 = yaml.load(fs.readFileSync(input_file_name, 'utf8'));
    const doc2 = yaml.load(fs.readFileSync(output_file_name, 'utf8'));

    //アウトプット先のファイルにnodeMetadataキーがあるかどうか確認
    if(doc2.nodeMetadata === undefined){
      console.log("add nodeMetadata Key...");
    }else{
      console.log("update nodeMetadata Key...");
    }
    let obj = Object.assign(doc2, doc1);
    let outputFile = optional_file_name === undefined ? output_file_name : optional_file_name
    
    fs.writeFileSync(outputFile, JSON.stringify(obj, null, '  '));
    console.log('finish!');
    
  } catch (e) {
    console.log(e);
  }

})()
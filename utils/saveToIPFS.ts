import axios from "axios";

const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxMjA1NGY5OS0yOGQ3LTQzMWEtOTkxOC0yNjQ2NDcwYTVmZGMiLCJlbWFpbCI6Imtldmluemh3QG91dGxvb2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA4Njk2ZTU2OTI0YWZjNWQyMzdhIiwic2NvcGVkS2V5U2VjcmV0IjoiODUyZGZhMDc0NTE3ZTE1MWQ5MjAyZDEzZWFjZGUzMzI4ZGYwM2ZlM2Q5MjU0ZjFlM2U3ZmI3NDllNTFlYTRlZiIsImlhdCI6MTcwMDgzNTU0NH0._eEz_CjD16FZe4T6PTbw2e1cihX6xrbAA6m-qOCUfNE'
const API_Key = '08696e56924afc5d237a'
const API_Secret = '852dfa074517e151d9202d13eacde3328df03fe3d9254f1e3e7fb749e51ea4ef'


 // 视频文件上传到IPFS服务器
const saveToIPFS = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("file", file);
  var config = {
    method: "post",
    url: `https://api.pinata.cloud/pinning/pinJSONToIPFS`,
    headers: {
      "pinata_api_key": API_Key,
      "pinata_secret_api_key": API_Secret,
      "Content-Type": "text/plain",
    },
    data: formData,
  };
  const response = await axios(config);
  return response.data.cid;
 }

 export default saveToIPFS;
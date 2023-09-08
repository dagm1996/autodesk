// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// const awsConfig = {
// region: region, // Change to your desired AWS region
// credentials: {
// accessKeyId: accessKeyId,
// secretAccessKey: secretAccessKey,
// },
// s3: { addressingStyle: "virtual", signatureVersion: "s3v4" },
// };

// const s3 = new S3Client(awsConfig);

// app.get("/getSignedUrl", async (req, res) => {
// const objectName = req.query.objectName;

// console.log(
// "`media/system_documents/${objectName}`",
// `media/system_documents/${objectName}`
// );
// try {
// const params = {
// Bucket: bucketName,
// Key: `${objectName}`,
// ACL: "public-read",
// };

// const command = new PutObjectCommand(params);
// const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

// res.json({ signedUrl: url });
// } catch (error) {
// console.error("Error generating signed URL:", error);
// res.status(500).json({ error: "Failed to generate signed URL" });
// }
// });

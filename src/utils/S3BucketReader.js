import aws from 'aws-sdk';

aws.config.update({
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY
});

export async function getS3Object(key, bucket) {
    const s3 = new aws.S3();
    return s3
        .getObject({ Bucket: bucket, Key: key })
        .promise()
        .then((data) => {
            return data;
        })
        .then(data => data.Body.toString('utf-8'))
        .then(body => JSON.parse(body));
}
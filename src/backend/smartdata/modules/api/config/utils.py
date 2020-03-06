import os
import boto3

from .files import DATA_S3_BUCKET

def s3Upload(s3_file, file_content):
    try:
        s3_client = boto3.resource(
            's3',
            region_name='sfo2',
            endpoint_url='https://sfo2.digitaloceanspaces.com',
            aws_access_key_id=os.environ['S3_AWS_ACCESS_KEY'],
            aws_secret_access_key=os.environ['S3_AWS_SECRET_KEY'],
        )

        s3_client.Object(DATA_S3_BUCKET, s3_file).put(Body=file_content, ACL='public-read')
        return True

    except Exception as err:
        print(err)
        return False

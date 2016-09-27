# Destiny Owl Sector ARG

- Each node contains a partial message
- each message is encrypted using aes-256-cbc
- each node contains it's own decryption tools:
 - a salt (the processing key)
 - an initialization vector

To decrypt the message use `openssl enc`:

```
openssl enc -ciphername aes-256-cbc -d -in DTCTT -s DTCTT.salt -iv DTCTT.iv -out CTCTT.txt
```

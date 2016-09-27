# Destiny Owl Sector ARG

The latest update to [owlsector.bungie.net]() includes a link that proceeds to give you a data transmission.

A very crafty reddit user beat me to the punch, and managed to decrypt the base64 encoded data of some of the messages,
by matching the forwarding protocols to find a full message chunck. (See: [Message Decoded for the new ARG][reddit])

- reddit is currently under the impression that the images are a map
- I believe the images are only part of the message, like a QR code, there is text data embedded in the unprocessed information

## Clues

The clues I describe below have largely been unidentified, missed, or dismissed by the community.
This is partially my fault, as I have been throwing comments at reddit after staying
up for 20 hours straight, and my ramblings seem like nonsense.

I believe detailing the clues in this manner will help to rectify my ramblings,
and together help the community unlock the next step:

### Clues From Bungie

- Nodes have names consisting of 4 different UTF-8 characters:
- Each character is actually an 8-bit hex code:
- Each node name, when translated to Hex, is a 32 bit Hex
- 32 bit hex happens to be the base block size factor for Rijndael
 (pronounced Rine-dahl) encryption keys
- Rijndael-AES-CBC is a [symmetric encryption][symmetric] algorithm that uses the same
key to both encrypt and decrypt a message

### Clues of my own

- text can be embedded in images. For an excellent example of this, just take a
photo of this QR code from any QR reader on your mobile device, or upload the QR
code below here: [ZXing Decoder Online](https://zxing.org/w/decode.jspx)
- I've noticed a pattern in the HEX-formatted names of the nodes... many Nodes have the same
32 bit block, even though their names are different
- cyptographic keys contain [randomart images][randomart] used to easily identify various keys by the naked eye

**Example Image with Data embedded (QR code)**  
![QR Code for your owlsector transmission](images/qr_code.jpg)

## Next Steps

Using the info below I've begun to write code to translate node names into hex key's,
using the [google-spreadsheets][] npm package, by consuming the data houseed in [this spreadsheet][spreadsheet]
, which is entered using [this form][entryform]

| Character | Character Name | 8-BIT Hex Code |
| :--------: | :-----------: | :------------: |
| &#9660 | [BLACK DOWN POINTING TRIANGLE][] | e296bc |
| &#9830 | [BLACK DIAMOND SUIT][] | e299a6 |
| &#9632 | [BLACK SQUARE][] | e296a0 |
| &#9679 | [BLACK CIRCLE][] | e2978f |

[symmetric]: https://en.wikipedia.org/wiki/Symmetric-key_algorithm
[randomart]: http://askubuntu.com/questions/184547/find-randomart-of-existing-ssh-key
[google-spreadsheets]: https://npmjs.org/packages/google-spreadsheets
[entryform]: https://docs.google.com/forms/d/e/1FAIpQLSfOdQyrQNGm6P9gyGGr1Yfjn9QmCiQ2v5zUCMZJM5-uhQSd6A/viewform?c=0&w=1
[spreadsheet]: https://docs.google.com/spreadsheets/d/1B8KmXWy0_bTpw_52m5r7-yYJxwfTJS1oyqDn5gKn6rk/htmlview?usp=sharing&sle=true
[reddit]: https://www.reddit.com/r/DestinyTheGame/comments/54p2eh/message_decoded_for_the_new_arg/
[BLACK DOWN POINTING TRIANGLE]: http://www.fileformat.info/info/unicode/char/25bc/index.htm
[BLACK DIAMOND SUIT]: http://www.fileformat.info/info/unicode/char/2666/index.htm
[BLACK SQUARE]: http://www.fileformat.info/info/unicode/char/25a0/index.htm
[BLACK CIRCLE]: http://www.fileformat.info/info/unicode/char/25CF/index.htm

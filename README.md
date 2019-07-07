# Deliveroo exercise

## Notes

Fonts were... borrowed using
[archive.org](https://web.archive.org/web/20180318065442/https://deliveroo.co.uk/).
Adelle doesn't seem to be used on the Deliveroo website any more.

I've picked semi-arbitrary breakpoints that roughly correspond to:

- mobile phone
- vertical tablet
- horizontal tablet/desktop

I've used some "modern" features (like the `picture` element) but these are both
well supported in 2019, and have graceful fallback in non-supporting browsers

I haven't done anything clever to clean up the data in `restaurants.json`. So,
for example, restaurants with large numbers of tags, long names, etc. will
"break" the layout. In a production application whether to handle that on the
front end or the back end would be a conversation.

I'm very, very bad at Sketch so I'm just eyeballing the padding, margin, etc.

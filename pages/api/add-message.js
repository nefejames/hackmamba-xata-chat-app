import { getXataClient } from "@utils/xata";

const xata = getXataClient();

const handler = async (req, res) => {
  const { author, newMessage, imgUrl } = req.body;

  await xata.db.messages.create({
    author: author,
    message: newMessage,
    img: imgUrl,
  });

  res.end();
};

export default handler;

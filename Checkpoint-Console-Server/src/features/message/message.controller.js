import service from "./message.service.js";

const getAll = (req, res) => {
  const messages = service.getAllMessages();

  return res.status(200).json({
    ok: true,
    code: 200,
    messages: messages,
  });
};

const create = (req, res) => {
    const message = service.createMessage(req.body.text)

    return res.status(200).json({
      ok: true,
      code: 200,
      message: message,
    });
}

export default {
    getAll,
    create
}
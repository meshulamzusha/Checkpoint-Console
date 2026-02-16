const getStatus = (req, res) => {
  return res.status(200).json({
    ok: true,
    code: 200,
    status: {
      checkpoint: "Erez checkpoint",
      isOpen: false,
      trafficLevel: 5,
      lastUpdated: new Date().toLocaleString(),
    },
  });
};

export default { getStatus };

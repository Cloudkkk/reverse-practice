const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/translate', async (req, res) => {
  const { text, targetLang } = req.query;

  try {
    const response = await axios.get('https://api.translationwebsite.com/translate', {
      params: {
        text,
        targetLang
      }
    });

    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error in translation' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

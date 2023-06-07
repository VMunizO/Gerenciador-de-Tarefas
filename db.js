const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Vmunizdo:XieDXmg4oE7Q8M0H@cluster0.wjzpdgh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao banco de dados');
}).catch((error) => {
  console.log('Erro ao conectar ao banco de dados:', error);
});

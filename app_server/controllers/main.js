/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'Express3' });
};

module.exports = {
  index
};

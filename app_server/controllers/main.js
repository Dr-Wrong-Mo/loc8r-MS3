/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'Express2' });
};

module.exports = {
  index
};

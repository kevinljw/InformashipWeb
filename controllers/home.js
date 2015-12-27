/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('coming_soon', {
    title: 'Informaship'
  });
};


function renderPage(req, res) {
    return res.status(200).render('main', {layout: 'layouts/index'});
}

module.exports = renderPage;
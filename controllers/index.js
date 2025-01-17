const axios = require('axios');

const ApiController = {
  async getData(req, res, next) {
    try {
      const { page, size } = req.query;
      const offset = (page - 1) * size;
      const pagination = {
        total_data: 0,
        total_pages: 0,
      };
      const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
      pagination.total_data = api.data.length;
      pagination.total_pages = Math.ceil(api.data.length / size);
      const data = api.data.slice(offset, offset + Number(size));

      const result = [];
      data.forEach((item) => {
        result.push({
          id: item.id,
          title: item.title
        })
      });

      res.json({
        message: 'success',
        result,
        pagination,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ApiController;
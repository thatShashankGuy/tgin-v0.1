import connect from '../services/database'
import require_login from "../middlewares/require_login";
import { Express,Request,Response } from "express";

export default (app : Express) => {
  app.get('/api/blogs/:id', require_login, async (req : any, res : Response) => {
    const db_res = await connect(`select * from blogs where id=${req.params.id}`)
    const blog = db_res.rows[0].message
    /*Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });*/

    res.send(blog); 
  });

  app.get('/api/blogs', require_login, async (req : any, res : Response) => {
    const db_res = await await connect(`select * from blogs where google_id=${req.user.id}`)
    const blogs = db_res.rows[0].message
    res.send(blogs);
  });

  /*app.post('/api/blogs', require_login, async (req :any , res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.status(200).send(blog);
    } catch (err) {
      res.status(400).send(err);
    }
  });*/
};

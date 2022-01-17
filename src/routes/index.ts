import { Router, Request, Response } from "express";

const controller = require("../controller/post.controller");
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la API de Posts");
});

router.get("/api/posts", (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  controller
    .getAllPosts()
    .then((posts: any) => {
      res.status(200).send(posts);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.post("/api/posts", (req: Request, res: Response) => {
  const { title, description } = req.body;

  controller
    .addPost(title, description)
    .then((fullPost: any) => {
      res.status(200).json(fullPost);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.delete("/api/posts/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  controller
    .deletePost(id)
    .then((post: any) => {
      res.status(200).json(post);
    })
    .catch((err: any) => {
      res.send(err);
    });
});
export default router;

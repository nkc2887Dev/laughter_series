import joi from "joi";

export const addJoke = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  author: joi.string().required(),
  category: joi.string().optional().allow(null, ""),
});

export const updateJoke = joi.object({
  author: joi.string().optional().allow(null, ""),
  title: joi.string().optional().allow(null, ""),
  content: joi.string().optional().allow(null, ""),
  category: joi.string().optional().allow(null, ""),
  likes: joi.number().optional().allow(null, ""),
  dislikes: joi.number().optional().allow(null, ""),
  comments: joi.array().items({
    user: joi.string().optional(),
  }),
});

export const deleteJoke = joi.object({
    
});

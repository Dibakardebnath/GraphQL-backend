const Post=require('./modals/Postmodals')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./modals/Userschema');

const resolver={
    Query:{
        hello:()=>{
            return 'Hello world'
        },
        getAllPosts:async()=>{
            return await Post.find();
        },
        getPost:async(_parent,{id},_context,_info)=>{
            return await Post.findById(id);
        }
    },
    Mutation :{
        createPost:async(parent, arg, context, info)=>{
            const{title, description} = arg.post
            try {
                const post = new Post({ title, description });
                await post.save();
                return post;
              } catch (error) {
                console.error('Error creating post:', error);
                throw new Error('Could not create post');
              }
        },
        registerUser: async (_, { username, email, password }) => {
            // Check if the email is already registered
            const existingUser = await User.findOne({ email });
            if (existingUser) {
              throw new Error('Email is already registered');
            }
      
            const hashedPassword = await bcrypt.hash(password, 10);
      

            const newUser = new User({ username, email, password: hashedPassword });
            await newUser.save();
            return newUser;
          },
          loginUser: async (_, { email, password }) => {
        
            const user = await User.findOne({ email });
            if (!user) {
              throw new Error('Invalid credentials');
            }
      
            // Compare passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
              throw new Error('Invalid credentials');
            }
      
            // Generate and return JWT token
            const token = jwt.sign({ userId: user.id }, 'Dibakar', { expiresIn: '1h' });
            return { userId: user.id, token, tokenExpiration: 3600 }; 
          },
        },
    }

module.exports = resolver;
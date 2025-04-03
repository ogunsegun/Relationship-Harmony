import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Relationship', // Change this to your database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};











// import mongoose from 'mongoose';

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true);

//     // to check if connected
//     if(isConnected){
//         console.log('MongoDB is already connected')
//         return;
//     }
//     // if not connect
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName:"soguntunnbi",
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })

//         isConnected = ture;

//         console.log('MongoDB connected')
//     } catch (error) {
//         console.log(error);
//     }
//     // now go to mongodb atlas pws:keIaxmriZg45IRwx ip:197.211.59.81
// }

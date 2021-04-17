const mongoose = require("mongoose");
const User = require("../models/userDb");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userDb", {
  useNewUrlParser: true,
});

const userSeed = [
  {
    name: "Jimmy Dean",
    email: "Jimmy.Dean@gmail.com",
    gender: "male",
    age: 39,
    url:
      "https://i.postimg.cc/nLJhcgfY/jayson-hinrichsen-dnn-Zj-GWUx7c-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Jason Vail",
    email: "Jason.Vail@yahoo.com",
    gender: "male",
    age: 45,
    url:
      "https://i.postimg.cc/RFPSd06X/brivel-bariki-i-Wl-Tv-Yween4-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Nancy Gregan",
    email: "Nancy.Gregan@hotmail.com",
    gender: "female",
    age: 28,
    url:
      "https://i.postimg.cc/1zr5gB9x/the-aw-creative-digital-marketing-vj-S20w04o-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Jerrard Mckinon",
    email: "jerrard.mckinon@gmail.com",
    gender: "male",
    age: 29,
    url: "https://i.postimg.cc/ZqJ2KtVS/brooke-cagle-ICTKcvn-Xx-8-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Betty York",
    email: "betty.york@yahoo.com",
    gender: "femal",
    age: 42,
    url:
      "https://i.postimg.cc/MKVznwbM/tabitha-turner-pv-J1-Q8-BF2-Iw-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Michele Goldberg",
    email: "michele.goldberg@hotmail.com",
    gender: "female",
    age: 25,
    url:
      "https://i.postimg.cc/y8TBTTG7/the-aw-creative-digital-marketing-yy2-BPHT8-U94-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Matthew Reyes",
    email: "matthew.reyes@hotmail.com",
    gender: "male",
    age: 40,
    url:
      "https://i.postimg.cc/X7f0V849/matthew-reyes-C-j-Tjc0g7-I-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Mary Gomez",
    email: "mary.gomez@gmail.com",
    gender: "female",
    age: 31,
    url:
      "https://i.postimg.cc/66Zk007F/mahdi-chaghari-Gy-Op3-Tma-P-o-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Laura Kwon",
    email: "laura.kwon@gmail.com",
    gender: "female",
    age: 22,
    url:
      "https://i.postimg.cc/PJnFcgL9/corey-saldana-k-Jp-L9-Qi-Sn-Ks-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Gigi Chandler",
    email: "gigi.chandler@gmail.com",
    gender: "female",
    age: 24,
    url:
      "https://i.postimg.cc/WbnfWfsY/felipe-vieira-8bu-Dlox-BDdg-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Nicole Fisher",
    email: "nicole.fisher@gmail.com",
    gender: "female",
    age: 27,
    url:
      "https://i.postimg.cc/CxrrYBBj/logan-weaver-o-FLf-Y8spzoo-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Sarah Thomas",
    email: "sarah.thomas@gmail.com",
    gender: "female",
    age: 29,
    url:
      "https://i.postimg.cc/Y0tzQMLr/leonardo-marinho-g-MVFf9r1-X4-Y-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Jacob Owens",
    email: "jacob.owens@gmail.com",
    gender: "male",
    age: 30,
    url:
      "https://i.postimg.cc/02W0Jgkv/jakob-owens-f-QPOZPLu-Wd-E-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Sandra Ingram",
    email: "sandra.ingram@gmail.com",
    gender: "female",
    age: 29,
    url: "https://i.postimg.cc/4ynnDSrv/docusign-Bd-VV3t-Qx-Zx8-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "George Lucas",
    email: "george.lucas@gmail.com",
    gender: "male",
    age: 35,
    url:
      "https://i.postimg.cc/bvTJsPPH/braxton-apana-a7-Uqwd-LWOZQ-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Lily Lam",
    email: "lily.lam@gmail.com",
    gender: "female",
    age: 21,
    url: "https://i.postimg.cc/gJt2HKnx/anthony-tran-VFRn-W1ui5xc-unsplash.jpg",
    date: new Date(Date.now()),
  },
  {
    name: "Greg Phillips",
    email: "greg.phillips@gmail.com",
    gender: "male",
    age: 26,
    url:
      "https://i.postimg.cc/Bt9sm7sn/mihajlo-sebalj-X65k-Dr-RPEVA-unsplash.jpg",
    date: new Date(Date.now()),
  },
];

User.deleteMany({}).then(() =>
  User.collection
    .insertMany(userSeed)
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);

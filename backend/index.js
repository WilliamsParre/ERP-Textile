const mongoose = require('mongoose');
const Express = require('express');
const cors = require('cors');

const app = Express();

app.use(Express.json())
app.use(cors());
// app.use(Express.urlencoded())

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected successfully !!!")
})

const employeeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    gender: String,
    email: String,
    qualification: String,
    mobileNo: Number,
    address: String,
    jobType: String,
    wing: String,
    salary: Number
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const contactUsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: Number,
    message: String
});


const User = new mongoose.model("User", userSchema)
const Contactus = new mongoose.model("contactus", contactUsSchema);
const Employee = new mongoose.model("employees", employeeSchema);

app.post("/addEmployee", (req, res) => {
    const { id, name, age, gender, email, qualification, mobileNo, address, jobType, wing, salary } = req.body
    console.log(req.body);
    User.findOne({ email: email }, (err, employee) => {
        if (employee) {
            res.send({ message: "Employee already exists" });
        } else {
            const employee = new Employee({
                id,
                name,
                age,
                gender,
                email,
                qualification,
                mobileNo,
                address,
                jobType,
                wing,
                salary
            });

            employee.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Employee added Successfully !!!" });
                }
            });
        }
    })

})

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull!", user: user });
            } else {
                res.send({ message: "Invalid Credentials!" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already exists" });
        } else {
            const user = new User({
                name,
                email,
                password
            });

            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered !!!" });
                }
            });
        }
    })
});

app.get("/getEmployee", (req, res) => {
    Employee.find({})
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err});
    });
});


app.post("/contactus", (req, res) => {

    const { firstName, lastName, email, phoneNo, message } = req.body

    const person = new Contactus({
        firstName,
        lastName,
        email,
        phoneNo,
        message
    });

    person.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "We have recived you message !!!" });
        }
    });
});

const port = 8000;
app.listen(port, () => {
    console.log(`MongoDB is listening at port ${port}`);
})
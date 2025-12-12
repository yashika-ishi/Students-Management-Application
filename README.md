<div align="center">

  <!-- TECHNOLOGY BADGES -->
  <a href="#">
    <img src="https://img.shields.io/badge/Angular%2017-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Reactive%20Forms-5C2D91?style=for-the-badge&logo=angular&logoColor=white" />
    <img src="https://img.shields.io/badge/Standalone%20Components-0FAAFF?style=for-the-badge&logo=angular&logoColor=white" />
    <img src="https://img.shields.io/badge/Custom%20CSS%20UI-ff69b4?style=for-the-badge&logo=css3&logoColor=white" />
  </a>

  <h1>🎓 Student Management System — Angular</h1>

  <p>
    A colorful, interactive, and beginner-friendly <strong>Student Management Web App</strong> 
    built using <strong>Angular 17 Standalone Components</strong> and 
    <strong>Reactive Forms</strong>.  
    An Angular application that displays a list of students and allows adding new ones through a Reactive Form. The app includes validations, sidebar navigation, and redirects to Home after saving a student.
  </p>
  <p><a href="https://github.com/yashika-ishi/Students-Management-Application/blob/main/1.%20Recording%20-%20Working%20of%20App.mp4"><strong>Application Working Video</strong></a></p>

  <p>🧑‍💻 By <strong>Yashika</strong> | <a href="https://github.com/yashika-ishi/Students-MAnagement-Application">View Repository</a></p>
</div>

---

# ✨ Key Features
- 🎨 **Home page shows all students details** (Name, Class, Gender, Hobby and Favourite Subject) 
- 📝 **Add Student form using Reactive Forms with required validations**  
- 🔄 **Dynamic Fields** (Hobby input shows only when checkbox is selected)
  - Hobby input visible only if "Has Hobby" is checked.
  - Class 6 → Shows welcome message.
  - Class 7 & 8 → Shows general educational message.
  - Class 9 → Shows board exam message.
- 📌 **Router Navigation** between Home ↔ Add Student  
- 🎯 **Real-time error messages**  
- 📱 **Responsive layout**

---

# 📂 **Project Structure**
<div align="center">
  <img src="./screenshots/6.Project Structure (image -1).png?raw=true" width="250" style="padding-right: 10px;"/>
  <img src="./screenshots/7.Project Structure (image -2).png?raw=true" width="230"/>
</div>

---

# 📸 **Application Screenshots**

## 🏠 **1. Home Page ( 2 Student fields)**
<img src="./screenshots/1.%20Home%20page%20%2B%20two%20students.png" width="700"/>

---

## ➕ **2. Add Student Screen**
### Hobby Hidden  
<img src="./screenshots/2.%20Add%20student%20screen%20(hobby%20hidden).png" width="700"/>

### 🔍 **3. Filling the Form**
**Entering data in 'Add Student**
<img src="./screenshots/3.Entering%20the%20data%20in%20Add%20student.png" width="700"/>

### **4.Name must at least have 5 characters**
<img src="./screenshots/4.%20Name%20must%20at%20least%20have%205%20characters.png" width="700"/>

### **5.Saved new enties with different scenarios( including NONE fields)**
**5.1. Favourite Subject: NONE**
**5.2. Hobby and Favourite Subject: NONE**
**5.3. Hobby: NONE**
<img src="./screenshots/5.Saved%20new%20enties%20with%20different%20scenarios(%20including%20NONE%20fields).png" width="900"/>

---

# 🛠️ **Technologies Used**

| Technology | Purpose |
|-----------|---------|
| Angular 17 | Frontend Framework |
| TypeScript | Strong typing & logic |
| Reactive Forms | Form validation & control |
| Angular Router | Page navigation |
| Custom CSS | UI styling (gradients, hover animations) |

---

# 🚀 **How to Run Locally**

```bash
npm install
ng serve --open

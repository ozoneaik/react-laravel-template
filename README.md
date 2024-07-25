# React Laravel Template
<div style="display: flex; align-items: center; justify-content: center;">
    <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo" style="height: 50px; margin-right: 10px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" style="height: 50px; margin-right: 10px;">
    <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" style="height: 50px;">
</div>

## คำอธิบาย

React Laravel Template เป็นโปรเจคเทมเพลตที่จัดเตรียมไว้เพื่อการใช้งาน Laravel เป็น backend API และ React เป็น frontend โดยโปรเจคนี้มาพร้อมกับระบบการจัดการผู้ใช้งานพื้นฐาน ซึ่งประกอบไปด้วย:

- **ระบบล็อกอิน (Login)**
- **ระบบล็อกเอาท์ (Logout)**
- **ระบบลงทะเบียน (Register)**

## คุณสมบัติหลัก

1. **Laravel API:**
    - ใช้ Laravel ในการจัดการ backend API
    - มีการตั้งค่าและโครงสร้างพื้นฐานที่พร้อมใช้งานทันที
    - รองรับการทำงานกับฐานข้อมูลเพื่อการจัดการผู้ใช้งาน

2. **React Frontend:**
    - ใช้ React ในการสร้าง UI ที่ตอบสนองเร็วและทันสมัย
    - โครงสร้างการจัดการสถานะที่ง่ายต่อการพัฒนาและขยายต่อ

3. **Authentication:**
    - รวมระบบการจัดการผู้ใช้งานที่ครบถ้วน ทั้งการลงทะเบียนผู้ใช้ใหม่ การล็อกอิน และการล็อกเอาท์
    - ใช้ JWT (JSON Web Tokens) ในการจัดการการยืนยันตัวตนและการอนุญาต

## วิธีการใช้งาน

1. **Clone repo นี้ลงในเครื่องของคุณ:**

    ```sh
    git clone https://github.com/ozoneaik/react-laravel-template.git
    ```

2. **ติดตั้ง dependencies สำหรับทั้ง backend และ frontend:**

    - เข้าไปที่โฟลเดอร์ react-laravel-template และรันคำสั่ง:

        ```sh
        cd react-laravel-template
        composer install
        cp .env.example .env
        php artisan key:generate
        ```

    - เข้าไปที่โฟลเดอร์ frontend และรันคำสั่ง:

        ```sh
        cd react-laravel-template/react
        npm install
        cp .env.example .env
        ```

3. **ตั้งค่าการเชื่อมต่อกับฐานข้อมูลในไฟล์ `.env` ภายในlaravel **

4. **รันเซิร์ฟเวอร์สำหรับทั้ง laravel และ react:**

    - ในโฟลเดอร์ backend:

        ```sh
        php artisan serve
        ```

    - ในโฟลเดอร์ frontend:

        ```sh
        npm run dev
        ```

ด้วยเทมเพลตนี้ คุณสามารถเริ่มต้นโปรเจคใหม่ได้อย่างรวดเร็วและมีพื้นฐานที่พร้อมใช้งานได้ทันที!

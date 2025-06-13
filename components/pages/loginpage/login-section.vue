<template>
  <div class="signup-wrapper">
    <div class="main-box">
      <!-- Left Welcome Message -->
      <div class="welcome-area">
        <h1>Welcome Back</h1>
        <p>Log in to access your dashboard, manage your account, and explore the latest features of GlassWebLabs.</p>
        <button class="learn-btn">Explore Features</button>
      </div>

      <!-- Right Login Form -->
      <div class="form-area">
        <h2>Log in to Your Accousnt</h2>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Enter Password" />
        <button class="submit-btn">Log In</button>

   <div class="form-links fancy">
    <a href="#" class="fancy-link">Forgot your password?</a>
    <p class="no-account">
      New here? <a href="/signup" class="fancy-link">Create an account</a>
    </p>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.signup-wrapper {
  min-height: 100vh;
  background: url('@/assets/images/hero.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.main-box {
  display: flex;
  width: 100%;
  max-width: 1100px;
  padding: 4rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.35);
  color: #fff;
  justify-content: space-between;
  gap: 2.5rem;
}

/* Welcome Side */
.welcome-area {
  flex: 1;
}

.welcome-area h1 {
  font-size: 3.4rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
}

.welcome-area p {
  font-size: 1.15rem;
  line-height: 1.8;
  opacity: 0.85;
  max-width: 400px;
  margin-bottom: 2.5rem;
}

.learn-btn {
  background: #ff4d79;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.learn-btn:hover {
  background: #e23b67;
}

/* Login Form */
.form-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-area h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.form-area input {
  width: 100%;
  padding: 1rem 1.2rem;
  margin: 0.7rem 0;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.05rem;
}

.form-area input::placeholder {
  color: #ddd;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(to right, #fc466b, #3f5efb);
  font-weight: bold;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background: linear-gradient(to right, #f94a6c, #3c5ff8);
  transform: scale(1.02);
}

.form-links.fancy {
  margin-top: 2rem;
  text-align: center;
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(12px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.fancy-link {
  color: #ffffffcc;
  font-size: 0.95rem;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.fancy-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, #fc466b, #3f5efb);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.fancy-link:hover {
  color: #fff;
}

.fancy-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.no-account {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #ccc;
}

</style>

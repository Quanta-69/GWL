<template>
  <section>
    <div class="wrapper">
      <div class="left">
        <div class="brand-row">
          <div class="logo"></div>
          <div class="name">Glass Web Labs</div>
        </div>
        <div class="text-content">
          <h1>Welcome Back!</h1>
          <p>Login to your GWL account to continue</p>
        </div>
        <div class="form-wrap">
          <div class="input-wrap">
            <label for="email">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div class="input-wrap">
            <label for="password">Password</label>
            <input type="text" placeholder="Password" />
          </div>
          <NuxtLink>Forgot Password?</NuxtLink>
        </div>
        <div class="btn-wrap">
          <GlassButton text="Login" variant="primary" />
        </div>
        <div class="sign-up">
          <p>Don't have an account?</p>
          <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>
      </div>

      <div class="right">
        <div class="text-content">
          <h1></h1>
          <div class="testimonial"></div>
        </div>
        <div class="company-hooks"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="css" scoped>
@reference "tailwindcss";
.wrapper {
  @apply flex-row bg-gray-200 min-h-[90vh] p-14;
}
.left,
.right {
  @apply w-full py-10 flex-col px-6 gap-10 rounded-xl;
}
.left {
  .brand-row {
    .logo {
      @apply h-10 w-10 rounded-full bg-gray-300;
    }
    .name {
      @apply text-2xl;
    }
    @apply flex items-center w-full gap-3;
  }
  .text-content {
    h1 {
      @apply text-3xl font-medium text-[var(--10)];
    }
    p {
      @apply text-lg text-[var(--gray)];
    }
    @apply flex flex-col gap-2 w-full items-start;
  }
  .form-wrap {
    @apply flex flex-col gap-2 w-full;
    .input-wrap {
      @apply flex flex-col gap-1;
    }
    label {
      @apply text-sm text-[var(--gray)] mb-1;
    }
    input {
      @apply p-2 rounded-md border border-gray-300 max-w-[390px] w-full;
    }
    a {
      @apply text-sm text-[var(--10)] underline font-bold mt-1;
    }
  }
  .btn-wrap {
    .divider {
      @apply text-sm text-[var(--gray)] text-center;
    }
    @apply flex flex-col gap-2 w-full max-w-[390px] gap-5;
  }
  .sign-up {
    p {
      @apply text-sm text-[var(--gray)];
    }
    a {
      @apply text-sm text-[var(--10)]  font-bold;
    }
    @apply flex items-center gap-2 ms-20;
  }
  @apply flex items-start justify-center bg-[var(--light)] ps-20 pt-10;
}
.right {
  background: linear-gradient(120deg, var(--100), var(--30));
}
</style>

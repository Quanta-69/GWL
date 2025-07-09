<template>
  <section>
    <div class="sect-text-wrap">
      <h1 class="sect-intro">Why Choose Us</h1>
      <p class="sect-desc">We're the best</p>
    </div>
    <div class="wrapper">
      <div class="double-bg">
        <div class="left">
          <div class="card-wrap">
            <div class="card">
              <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10H20L11 23V14H4L13 1V10Z"></path></svg></div>
              <div class="text-content">
                <h1>Speed Efficiency</h1>
                <p>We are not only fast, but really really efficient.</p>
              </div>
            </div>
            <div class="card">
              <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path></svg></div>
              <div class="text-content">
                <h1>Unique Designs</h1>
                <p>We create unique designs just for you.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="card-wrap">
            <div class="card">
              <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 19V15.0069H2.07423C1.39109 13.8286 1 12.46 1 11C1 6.58172 4.58172 3 9 3C12.3949 3 15.2959 5.11466 16.4576 8.09864C16.7951 8.0339 17.1436 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19H14ZM6 21H16V23H6V21ZM2 17H12V19H2V17Z"></path></svg></div>
              <div class="text-content">
                <h1>Cloud Based</h1>
                <p>Your site is safe and accessible at all times.</p>
              </div>
            </div>
            <div class="card">
              <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4668 8.69379L19.7134 8.12811C20.1529 7.11947 20.9445 6.31641 21.9323 5.87708L22.6919 5.53922C23.1027 5.35653 23.1027 4.75881 22.6919 4.57612L21.9748 4.25714C20.9616 3.80651 20.1558 2.97373 19.7238 1.93083L19.4706 1.31953C19.2942 0.893489 18.7058 0.893489 18.5293 1.31953L18.2761 1.93083C17.8442 2.97373 17.0384 3.80651 16.0252 4.25714L15.308 4.57612C14.8973 4.75881 14.8973 5.35653 15.308 5.53922L16.0677 5.87708C17.0555 6.31641 17.8471 7.11947 18.2866 8.12811L18.5331 8.69379C18.7136 9.10792 19.2864 9.10792 19.4668 8.69379ZM13.3869 6.33879C13.661 6.77254 14.0357 7.09305 14.5111 7.30032L15.0764 7.54679C15.6466 7.79534 16.054 8.19476 16.2987 8.74505L16.6365 9.5047C17.364 11.1416 19.5284 11.3993 20.709 10.2787L20.8 10.4C21.0867 10.7822 21.0629 11.3138 20.7433 11.669L11.7433 21.669C11.5537 21.8797 11.2835 22 11 22C10.7165 22 10.4464 21.8797 10.2567 21.669L1.25671 11.669C0.937093 11.3138 0.913337 10.7822 1.2 10.4L4.2 6.4C4.38886 6.14819 4.68525 6 5 6H13.2063C13.2571 6.1157 13.3173 6.22863 13.3869 6.33879Z"></path></svg></div>
              <div class="text-content">
                <h1>Premium Designs</h1>
                <p>Premium designs created just for you, to your taste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "tailwindcss";

.double-bg{
  .card{
    .svg{
      @apply h-11 w-11 p-1.5 rounded-full inline-flex justify-center items-center bg-[var(--alpha-bg)]
    }
    .text-content{
      @apply flex flex-col gap-1
    }
    h1{
      @apply text-xl
    }
    @apply shadow-none items-start justify-start px-5 py-5 gap-2.5 max-w-[370px]
  }
  .left, .right{
    @apply rounded-xl flex items-center
  }
  .left{
    .card{
      h1{
        @apply text-[var(--60)]
      }
      @apply bg-[var(--30)] text-white
    }
    @apply bg-[var(--60)] w-full 
  }
  .right{
    .card{
      h1{
        @apply text-[var(--30)]
      }
      @apply bg-[var(--60)]
    }
    @apply  w-full 
  }
  @apply flex items-center justify-between w-full mt-10
}
.card-wrap{
  @apply flex-col items-center mt-0  py-10
}
</style>

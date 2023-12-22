<template>
  <Html :dir="activeLocalization === 'ar' ? 'rtl' : 'ltr'">
    <Head>
      <Title>
        {{ k('title') }}
      </Title>
    </Head>
    <Body>
      <div class="p-5 flex h-screen justify-center items-center flex-col">
        <div class="mb-2 text-7xl font-extrabold dark:text-primary-400 text-primary-600">
          {{ k('meta.title') }}
        </div>
        <div class="mb-4 capitalize text-lg">
          {{
            k("meta['description'].d", {
              dc: activeLocalization === 'ar' ? 'جميل 😻' : 'pretty ❤️‍🔥',
            })
          }}
        </div>
        <UButton
          icon="i-heroicons-beaker"
          class="duration-150 active:scale-[0.97] shadow-xl select-none"
          @click="swichLanguage"
        >
          {{
            k('changeLanguage.0', {
              // dynamic referencing example (Interpolation)
              lng: activeLocalization === 'ar' ? 'اللغة' : 'language',
            })
          }}
        </UButton>
      </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
  import { kalemah } from 'kalemah';
  const { k, changeLanguage, activeName } = kalemah();

  const activeLocalization = ref();

  const swichLanguage = () => {
    changeLanguage(activeName() === 'en' ? 'ar' : 'en');
    activeLocalization.value = activeName();
  };
</script>

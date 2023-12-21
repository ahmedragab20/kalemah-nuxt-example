<template>
  <Html :dir="activeLocalization === 'ar' ? 'rtl' : 'ltr'">
    <Head>
      <Title>
        {{ k('title') }}
      </Title>
    </Head>
    <Body>
      <div class="p-5">
        <div class="mb-2">{{ k('meta.title') }}</div>
        <div class="mb-4">
          {{
            k("meta['description'].d", {
              dc: activeLocalization === 'ar' ? 'وصف جميل 😻' : 'pretty description ❤️‍🔥',
            })
          }}
        </div>
        <UButton
          icon="i-heroicons-beaker"
          class="duration-150 active:scale-[0.97] shadow-xl select-none"
          @click="swichLanguage"
        >
          {{
            k('changeLanguage', {
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

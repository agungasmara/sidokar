<script type="text/x-template" id="selectMonthly">
            <div
    class="month-picker__container"
    :class="`month-picker--${variant}`"
  >
    <div v-if="showYear" class="month-picker__year">
      <button @click="changeYear(-1)">
        &lsaquo;
      </button>
      <p v-if="!editableYear">
        {{ year }}
      </p>
      <input
        v-else
        type="text"
        v-model.number="year"
        @change="onChange()"
      >
      <button @click="changeYear(+1)">
        &rsaquo;
      </button>
    </div>
    <div class="month-picker">
      <div
        v-for="(month, i) in monthsByLang"
        :key="month"
        :class="{
          'clearable': clearable,
          'selected': currentMonth === month
        }"
        class="month-picker__month"
        @click="selectMonth(i, true)"
      >
        {{ month }}
      </div>
    </div>
  </div>
</script>

<template>
  <div>
    <q-card class="q-pa-md subscribCard absolute-center" >
      <div>
        <q-item-label class="q-pa-md text-center text-h5">
          SUBSCRIPTION
        </q-item-label>
      </div>
      <div>
        <q-table
          class="subscribTable"
          :data="data"
          :columns="columns"
          row-key="name"
          :hide-pagination="true"
          separator="vertical"
        >
          <template v-slot:header-cell="props">
            <q-th
              class="header-text"
              :props="props"
            >
              <q-badge class="text-subscription-header">{{ props.col.label }}</q-badge>
            </q-th>
            <!--<q-th
              key="vip"
              :props="props"
            >
              <q-badge color="green">{{ props.col.vip }}</q-badge>
            </q-th>-->
          </template>
        </q-table>
      </div>
      <div class="row q-pa-md q-mt-sm justify-around">
        <div>
          <q-btn class="subscribeButton" :size="size" outline label="Try For Free" />
        </div>
        <div>
          <q-btn class="subscribeButton" :size="size" outline label="VIP" />
        </div>
        <div>
          <q-btn class="subscribeButton" :size="size" outline label="Premiun" />
        </div>
        <div>
          <q-btn class="subscribeButton" :size="size" outline label="Universe" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 'lg',
      columns: [
        {
          name: 'name',
          label: 'Field/Plan',
          align: 'left',
          field: row => row.name
        },
        { field: 'playfree', align: 'center', label: 'PlayFree', name: 'playfree' },
        { field: 'vip', align: 'center', label: 'VIP', name: 'vip' },
        { field: 'premium', align: 'center', label: 'Premium', name: 'premium' },
        { field: 'universe', align: 'center', label: 'Universe', name: 'universe' }
      ],
      data: [
        {
          name: 'Section1',
          playfree: 'Yes',
          vip: 'No',
          premium: 'No',
          universe: 'No'
        },
        {
          name: 'Section2',
          playfree: 'Yes',
          vip: 'Yes',
          premium: 'No',
          universe: 'No'
        },
        {
          name: 'Section3',
          playfree: 'Yes',
          vip: 'No',
          premium: 'Yes',
          universe: 'No'
        },
        {
          name: 'Section4',
          playfree: 'Yes',
          vip: 'Yes',
          premium: 'No',
          universe: 'Yes'
        },
        {
          name: 'Section5',
          playfree: 'Yes',
          vip: 'Yes',
          premium: 'Yes',
          universe: 'Yes'
        }
      ]
    }
  }
}
</script>

<style>
.subscribCard {
  width: 70%;
}
.text-subscription-header {
  background-color:gold;
}
.subscribeButton {
  color: gold;
}
.subscribeButton:hover {
  -ms-transform: scale(1.4); /* IE 9 */
  -webkit-transform: scale(1.4); /* Safari 3-8 */
  transform: scale(1.4);
  color: rgb(234, 250, 18);
}
</style>

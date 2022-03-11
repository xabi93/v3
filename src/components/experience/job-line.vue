<script setup>
import { defineProps } from "vue";

const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
})

const start = new Date(props.job.start)
let finish
if (props.job.end) {
    finish = new Date(props.job.end)
} else {
    finish = new Date()
}

const diff = new Date(finish.getTime() - start.getTime())

const year = diff.getFullYear() - new Date(0).getFullYear() // 1970
let month = diff.getMonth()
const days = diff.getDate()
if (days > 0) {
    month++
}

let formatDiff = ''

if (year > 0 && month > 0) {
    formatDiff += `${year} years and ${month} months`
} else if (year > 0) {
    formatDiff += `${year} years`
} else if (month > 0) {
    formatDiff += `${month} months`
}

</script>


<template>
    <div class="w-full lg:flex">
        <div class="flex justify-between leading-normal sm:p-4">
            <img
                :alt="job.company"
                :src="require(`../../assets/companies/${job.logo}`)"
                class="w-12 h-12 rounded-full mr-4 border border-grey-light z-10 bg-white"
                height="100"
                width="100"
            />
            <div>
                <div class="text-sm">
                    <span>
                        {{ new Date(job.start).toLocaleString('en-us', { year: "numeric", month: "short" }) }}
                        -
                        {{ new Date(job.end).toLocaleString('en-us', { year: "numeric", month: "short" }) }}
                        :
                        {{ formatDiff }}
                    </span>
                    <div>
                        <span class="text-black font-bold text-xl block md:inline">
                                {{
                                    job.title
                                }}
                        </span>
                        <a
                            :href="job.website"
                            target="_blank"
                            rel="noopener"
                            class="text-link font-semibold"
                        >@{{ job.company }}</a>
                    </div>
                </div>
                <ul class>
                    <li
                        v-for="(desc, i) in description"
                        :key="i"
                        class="my-3 text-grey-darker text-base flex"
                    >
                        <div class="mr-2">
                            <fa :icon="check" />
                        </div>
                        <div class="text-justify">{{ desc }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

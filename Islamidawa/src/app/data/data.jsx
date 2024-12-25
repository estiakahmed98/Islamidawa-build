export const moktobData = {
  title: "মক্তব বিষয়",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে", value: 70, max: 150 },
    { label: "পুরাতন মক্তব চালু হয়েছে", value: 85, max: 105 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 105, max: 105 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 105, max: 105 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 70,
      max: 105,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 40, max: 100 },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
      value: 60,
      max: 100,
    },
  ],
};

export const DayeBisoyData = {
  title: "দা’য়ী বিষয়",
  data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 1, max: 10 }],
};

export const DawatiBisoyData = {
  title: "দাওয়াতি বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 70, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 10, max: 50 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 120, max: 200 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 60, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 150,
      max: 200,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 45, max: 100 },
  ],
};

export const DawatiMoslishData = {
  title: "দাওয়াতি মজলিশ",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে ", value: 55, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 15, max: 100 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 50, max: 100 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 50, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
      value: 60,
      max: 100,
    },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
      value: 55,
      max: 100,
    },
  ],
};

export const JamatBisoyData = {
  title: "জামাত বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 40, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 40, max: 100 },
  ],
};
export const DineFeraData = {
  title: "দ্বীনে ফিরে এসেছে",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 66, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 70, max: 100 },
  ],
};

export const SoforBisoyData = {
  title: "সফর বিষয়",
  data: [
    { label: "মাদ্রাসা সফর করা হয়েছে", value: 7, max: 100 },
    { label: "চলমান মক্তব চালু হয়েছে", value: 15, max: 100 },
  ],
};

//সজসিজফিদফজইদজফিজদিজফিপদজপফজপ্সদজপজফপিজদপইফগজদফপগজিজপিদজপি

export const AmoliChartData = [
  { name: "Closed", value: 95, color: "#28a745" }, // Green
  { name: "Remaining", value: 5, color: "#dc3545" }, // Red
];

export const TalimDonutChartData1 = [
  { name: "Completed", value: 80, color: "#28a745" }, // Green
  { name: "Pending", value: 20, color: "#dc3545" }, // Red
];

export const TalimDonutChartData2 = [
  { name: "Started", value: 50, color: "#007bff" }, // Blue
  { name: "Not Started", value: 50, color: "#ffc107" }, // Yellow
];

const rows = [
  {
    id: 1,
    name: "দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা নিয়ে মজলিস হয়েছে",
    data: Array(30).fill(0),
  },
  { id: 2, name: "মজলিসে মোট অংশগ্রহণ করেছে", data: Array(30).fill(0) },
  { id: 3, name: "প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে", data: Array(30).fill(0) },
  {
    id: 4,
    name: "প্রশিক্ষণ কর্মশালায় মোট অংশগ্রহণ করেছে",
    data: Array(30).fill(0),
  },
  { id: 5, name: "জুমার মসজিদে আলোচনা হয়েছে", data: Array(30).fill(0) },
];

export const moktobData_nazmul = {
  title: "মক্তব বিষয়",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে", value: 80, max: 120 },
    { label: "পুরাতন মক্তব চালু হয়েছে", value: 80, max: 120 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 80, max: 110 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 110, max: 130 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 80,
      max: 105,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 80, max: 100 },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে",
      value: 85,
      max: 100,
    },
  ],
};

export const DayeBisoyData_nazmul = {
  title: "দা’য়ী বিষয়",
  data: [{ label: "সহযোগি দায়ী তৈরি হয়েছে", value: 7, max: 10 }],
};

export const DawatiBisoyData_nazmul = {
  title: "দাওয়াতি বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 75, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 45, max: 50 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা", value: 170, max: 200 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে", value: 85, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে",
      value: 180,
      max: 200,
    },
    { label: "বয়স্ক কোরআন শিক্ষা মোট অংশগ্রহণ করেছে", value: 75, max: 100 },
  ],
};

export const DawatiMoslishData_nazmul = {
  title: "দাওয়াতি মজলিশ",
  data: [
    { label: "নতুন মক্তব চালু হয়েছে ", value: 80, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে  ", value: 80, max: 100 },
    { label: "মক্তবের মোট ছাত্র-ছাত্রীর সংখ্যা ", value: 85, max: 100 },
    { label: "মক্তবের অভিভাবক সম্মেলন হয়েছে ", value: 65, max: 100 },
    {
      label: "মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে ",
      value: 80,
      max: 100,
    },
    {
      label: "নব মুসলিমদের দ্বীন শিক্ষার ফিকির করা হয়েছে ",
      value: 80,
      max: 100,
    },
  ],
};

export const JamatBisoyData_nazmul = {
  title: "জামাত বিষয়",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 80, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 85, max: 100 },
  ],
};
export const DineFeraData_nazmul = {
  title: "দ্বীনে ফিরে এসেছে",
  data: [
    { label: "অমুসলিম কে দাইয়াত দেওয়া হয়েছে", value: 85, max: 100 },
    { label: "পুরাতন মক্তব চালু হয়েছে ", value: 75, max: 100 },
  ],
};

export const SoforBisoyData_nazmul = {
  title: "সফর বিষয়",
  data: [
    { label: "মাদ্রাসা সফর করা হয়েছে", value: 75, max: 100 },
    { label: "চলমান মক্তব চালু হয়েছে", value: 85, max: 100 },
  ],
};

//সজসিজফিদফজইদজফিজদিজফিপদজপফজপ্সদজপজফপিজদপইফগজদফপগজিজপিদজপি

export const AmoliChartData_nazmul = [
  { name: "Closed", value: 75, color: "#28a745" }, // Green
  { name: "Remaining", value: 25, color: "#dc3545" }, // Red
];

export const TalimDonutChartData1_nazmul = [
  { name: "Completed", value: 80, color: "#28a745" }, // Green
  { name: "Pending", value: 20, color: "#dc3545" }, // Red
];

export const TalimDonutChartData2_nazmul = [
  { name: "Started", value: 85, color: "#007bff" }, // Blue
  { name: "Not Started", value: 15, color: "#ffc107" }, // Yellow
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

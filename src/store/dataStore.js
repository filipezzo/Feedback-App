import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  data: [],
  loading: false,
  error: "",
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .data.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredData: () => {
    const state = get();

    return state.selectedCompany
      ? state.data.filter((item) => item.company === state.selectedCompany)
      : state.data;
  },
  addItemToList: async (text) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))
      .substring(1);
    const newItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company,
      badgeLetter: company[0].toUpperCase(),
    };

    set((state) => ({
      data: [...state.data, newItem],
    }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },
  selectList: (item) => {
    set(() => ({
      selectedCompany: item,
    }));
  },
  fetchData: async () => {
    set(() => ({
      loading: true,
    }));

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }
      const dataApi = await response.json();

      set(() => ({
        data: dataApi.feedbacks,
      }));
      set(() => ({
        loading: false,
      }));
    } catch (e) {
      set(() => ({
        error: "Something went wrong",
      }));
    }
    set(() => ({
      loading: false,
    }));
  },
}));

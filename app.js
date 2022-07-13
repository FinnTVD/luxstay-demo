const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const containerFilter = $(".container-filter")
const filterAdd = $(".filter-6")
const active = "active"
const filterCloseArr = $$(".filter-close")
const checkItemsArr = $$(".check-item")
const countItemChecked = $(".count-item--checked")

const app = {
    isContainerFilter: false,
    handleEvents: function () {
        const _this = this
        var isActiveFilter = []
        for (let i = 0; i < filterCloseArr.length; i++) {
            isActiveFilter[i] = false;
        }

        var isActiveItemCheck = []
        for (let i = 0; i < checkItemsArr.length; i++) {
            isActiveItemCheck[i] = false;
        }
        // xử lý: nếu click vào filterAdd thì show/hide containerFilter
        filterAdd.addEventListener("click", function (e) {
            _this.isContainerFilter = !_this.isContainerFilter
            if (_this.isContainerFilter) {
                containerFilter.classList.add(active)
                this.classList.add(active)
            } else {
                if (e.target.matches(".active") && !e.target.matches(".count-item--checked")) {
                    containerFilter.classList.remove(active)
                    this.classList.remove(active)
                }
            }
        })

        // nếu click ngoài containerFilter và filterAdd thì remove 
        window.addEventListener("click", function (e) {
            if (!containerFilter.contains(e.target) && !e.target.matches(".filter-6")) {
                containerFilter.classList.remove(active)
                filterAdd.classList.remove(active)
            }

            // nếu click vào filterCloseArr[i] nào thì add thêm class active vào filterCloseArr[i] đó
            for (let i = 0; i < filterCloseArr.length; i++) {
                if (e.target == filterCloseArr[i]) {
                    isActiveFilter[i] = !isActiveFilter[i]
                    if (isActiveFilter[i]) {
                        filterCloseArr[i].classList.add(active)
                    } else {
                        filterCloseArr[i].classList.remove(active)
                    }
                }
            }

            // nếu click vào checkItemsArr[i] nào thì add thêm class active vào filterCloseArr[i] dó
            for (let i = 0; i < checkItemsArr.length; i++) {
                if (e.target == checkItemsArr[i] || checkItemsArr[i].contains(e.target)) {
                    isActiveItemCheck[i] = !isActiveItemCheck[i]
                    if (isActiveItemCheck[i]) {
                        checkItemsArr[i].classList.add(active)
                    } else {
                        checkItemsArr[i].classList.remove(active)
                    }
                }
            }
        })

        var countChecked = 0
        checkItemsArr.forEach(function (item) {
            item.addEventListener("click", function (e) {
                if (!e.target.matches(".active") && !item.matches(".active")) {
                    countChecked++
                } else {
                    countChecked--
                }
                if (countChecked > 0) {
                    countItemChecked.style.display = "inline-block"
                    countItemChecked.innerHTML = countChecked
                } else {
                    countItemChecked.style.display = "none"
                }
            })
        })

    },
    start: function () {
        this.handleEvents()
    }

}
app.start()

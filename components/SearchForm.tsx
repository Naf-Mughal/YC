import Form from "next/form"
import SearchFormReset from "@/components/SearchFormReset"
import { Search } from "lucide-react"

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action={"/"} className="search-form" scroll={false}>
            <input name="query" className="search-input" defaultValue={query} placeholder="Search for a startup" />

            <div className="flex gap-2">
                {
                    query && <SearchFormReset />
                }

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm

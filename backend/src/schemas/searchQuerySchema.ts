import * as yup from "yup";

const SearchQuerySchema = yup.object().shape({
    query: yup.string().required("query is required").typeError("query must be string.")
});

export default SearchQuerySchema;
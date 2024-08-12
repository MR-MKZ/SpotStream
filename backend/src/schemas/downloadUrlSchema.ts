import * as yup from "yup";

const DownloadUrlSchema = yup.object().shape({
    url: yup.string().required("url is required").typeError("url must be string.")
});

export default DownloadUrlSchema;
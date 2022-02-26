import { useState } from "react";
import React from "react";
import { Formik } from "formik";

export default function Recipe() {
  const [label, setLabel] = useState("");

  const [recipe, setRecipes] = useState([]);

  const addRecipe = () => {
    setRecipes((recipes) => [...recipes, label]);
  };

  const handleSubmit = (e) => {
    console.log(e, "HELLOOOO");
  };

  return (
    // <form className="p-4" onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label className="form-label">Title</label>
    //     <input
    //       value={label}
    //       onChange={(e) => {
    //         setLabel(e.target.value);
    //       }}
    //       type="text"
    //       className="form-control"
    //       id="exampleFormControlInput1"
    //       placeholder="Grandmother's lemon pie"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Category</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="exampleFormControlInput1"
    //       placeholder="Bakery"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Description</label>
    //     <textarea
    //       className="form-control"
    //       id="exampleFormControlTextarea1"
    //       rows="3"
    //     ></textarea>
    //   </div>
    //   <button type="submit" className="btn btn-success" onClick={addRecipe}>
    //     Success
    //   </button>
    //   <div>{label}</div>
    // </form>

    <Formik
      initialValues={{ title: "", category: "", description: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={values.title}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ex. Grandmother's lemon pie"
              onChange={handleChange}
              onBlur={handleBlur}
              name="title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type={values.category}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Bakery"
              onChange={handleChange}
              onBlur={handleBlur}
              name="category"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
            ></textarea>
          </div>
          <button
            className="btn btn-success"
            onClick={addRecipe}
            type="submit"
            disabled={isSubmitting}
          >
            Save
          </button>
          <div>{values.title}</div>
          <div>{values.category}</div>
          <div>{values.description}</div>
        </form>
      )}
    </Formik>
  );
}

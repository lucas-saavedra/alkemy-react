import { useEffect, useState } from "react";
import axios from 'axios';
import { Form, Button, Container, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { useFormik } from 'formik';
import ItemList from "../ItemList/ItemList";
import PaginationCmp from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";

const ItemListContainer = () => {

    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState('');
    const [offset, setOffset] = useState(0);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const validate = values => {
        const errors = {};
        if (!values.search) {
            errors.search = 'Required';
        } else if (values.search.length < 3) {
            errors.search = 'Must be 3 characters or more';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        validate,
        onSubmit: values => {
            setSearch(values.search)
        },
    });
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            if (search !== '') {
                setLoading(true);
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&offset=${offset}&apiKey=4926cbbf15ee43678820303661e20f94`)
                    .then(({ data }) => {
                        setRecipes(data.results);
                        setTotalRecipes(data.totalResults);
                    })
                    .catch((error) => {
                        setError(error)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }

        }
        return function cleanup() {
            mounted = false
        }
    }, [search, offset])

    const paginate = offset => {
        setOffset(offset)
    };
    return (
        <>
            <Container className="h-100">

                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col className='m-0 py-3'>
                            <InputGroup className="m-0">
                                <FormControl
                                    placeholder="Search a recipe"
                                    aria-label="Search a recipe"
                                    id="search"
                                    name="search"
                                    type="search"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.search}
                                />
                                <Button variant="outline-secondary" type="submit" >
                                    Search
                                </Button>
                            </InputGroup>
                            {formik.errors.search ? <div className="text-danger">{formik.errors.search}</div> : null}
                        </Col>
                    </Row>
                </Form>



                {loading ? (<Loader />) :
                    (
                        <> <PaginationCmp
                            offset={offset}
                            paginate={paginate}
                            totalRecipes={totalRecipes}
                        />
                            {
                                error ?
                                    (<PageNotFound msg={'An error has appeared, please try again.'} />) :
                                    (recipes && true && (< ItemList recipes={recipes} />))
                            }

                        </>

                    )

                }
            </Container>

        </>
    )
}

export default ItemListContainer
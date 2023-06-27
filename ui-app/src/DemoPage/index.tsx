import React, { useState } from 'react'
import { Box, DataTable, Text, Spinner, Button, Heading } from 'grommet'
import axios from 'axios'
import { Refresh } from 'grommet-icons'

interface IBookItem {
    id: string, name: string, author: string
}

interface IPublisherItem {
    id: string, name: string, revenue: string
}

interface IBooksResponse {
    items: Array<IBookItem>,
    metadata: { title: string, source: string }
}

interface IPublishersResponse {
    items: Array<IPublisherItem>,
    metadata: { title: string, source: string }
}

function DemoPage() {
    const [booksData, setBooksData] = useState<IBooksResponse | null>(null)
    const [publishersData, setPublishersData] = useState<IPublishersResponse | null>()
    const [showBooksSpinner, setShowBooksSpinner] = useState(false)
    const [showPublishersSpinner, setShowPublishersSpinner] = useState(false)

    const HOST="http://ec2-3-144-100-189.us-east-2.compute.amazonaws.com"
    const getBooksData = () => {

        setShowBooksSpinner(true)
        axios.get(`${HOST}/books`).then((response) => {
            console.log(response)
            setBooksData(response?.data)
            setShowBooksSpinner(false)
        })
    }

    const getPublishersData = () => {
        setShowPublishersSpinner(true)
        axios.get(`${HOST}/publishers`).then((response) => {
            console.log(response)
            setPublishersData(response?.data)
            setShowPublishersSpinner(false)
        })
    }

    return (
        <Box height={'100vh'}>
            <Box width={'100%'} height="100px" background={'grey'}></Box>
            <Box direction='row' gap='small' width={"100%"} height='100%'>
                <Box width={'50%'} align='center' border>
                    {booksData ?
                        <Box height={'100%'}>
                            <Box direction='row' align='center'>
                                <Heading level='1'>{booksData?.metadata.title}</Heading>
                                <Box width={"10%"}>
                                    <Button primary onClick={getBooksData} icon={<Refresh />} />
                                </Box>
                            </Box>
                            <DataTable
                                primaryKey={"id"}
                                columns={
                                    [
                                        { property: "name", header: <Text weight={'bold'}>Book Name</Text> },
                                        { property: 'author', header: <Text weight={'bold'}>Author</Text> }
                                    ]
                                }
                                data={booksData?.items}
                            />
                        </Box>
                        :
                        <Box height={'100%'} margin='200px' width={'200px'}>
                            <Button label="Show books data" primary onClick={getBooksData} />
                            {showBooksSpinner && <Box direction='row' gap='small' margin={'large'} align='center' justify='center'><Spinner size='medium' /> <Text>Fetching...</Text></Box>}
                        </Box>
                    }
                </Box>

                <Box width={'50%'} align='center' border>
                    {publishersData ?
                        <Box>
                            <Box direction='row' align='center'>
                                <Heading level={1}>{publishersData?.metadata.title}</Heading>
                                <Box width={"10%"}>
                                    <Button icon={<Refresh />} primary onClick={getPublishersData} />
                                </Box>
                            </Box>
                            <DataTable
                                primaryKey={"id"}
                                columns={
                                    [
                                        { property: "name", header: <Text weight={'bold'}>Publisher Name</Text> },
                                        { property: 'revenue', header: <Text weight={'bold'}>Revenue</Text> }
                                    ]
                                }
                                data={publishersData?.items}
                            />
                        </Box>
                        :
                        <Box height={'100%'} margin='200px' width={'250px'}>
                            <Button label="Show publishers data" primary onClick={getPublishersData} />
                            {showPublishersSpinner &&
                                <Box
                                    direction='row'
                                    gap='small'
                                    margin={'large'}
                                    align='center'
                                    justify='center'
                                >
                                    <Spinner size='medium' />
                                    <Text>Fetching...</Text>
                                </Box>}
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default DemoPage
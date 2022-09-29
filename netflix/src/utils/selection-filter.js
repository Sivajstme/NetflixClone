export default function selectionFilter({series, films}) {
    return{
        series : [
            {
                title : 'Feel good',
                data : series.filter((item) => item.genre === 'feel-good')
            },
            {
                title : 'Documentaries',
                data : series.filter((item) => item.genre === 'documentaries')
            },
            {
                title : 'Comedies',
                data : series.filter((item) => item.genre === 'comedies')
            },
            {
                title : 'Children',
                data : series.filter((item) => item.genre === 'children')
            },
            {
                title : 'Crime',
                data : series.filter((item) => item.genre === 'crime')
            }
        ],

        films : [
            {
                title : 'Thriller',
                data : films.filter((item) => item.genre === 'thriller')
            },
            {
                title : 'Suspense',
                data : films.filter((item) => item.genre === 'suspense')
            },
            {
                title : 'Drama',
                data : films.filter((item) => item.genre === 'drama')
            },
            {
                title : 'romance',
                data : films.filter((item) => item.genre === 'romance')
            },
            {
                title : 'Crime',
                data : films.filter((item) => item.genre === 'crime')
            },
            {
                title : 'Children',
                data : films.filter((item) => item.genre === 'children')
            }
        ],

    }
}
import React, { useState } from 'react'; // useEffect -> permite a execuação de trecho de código assim que a tela 
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        // usar o <> ao invés de <View> permite resolver muitos problemas
        // de exibição de conteúdo na tela como por exemplo se tiver muito
        // conteúdo a ser exibido e o aparelho móvel cortar parte do conteúdo
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList 
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './lang-provider.selectors';
import { useMappedState } from 'redux-react-hook';

type PropTypes = {
    locale: string,
    messages: object,
    children: React.ReactNode,
}

// const LanguageProvider =  ({ messages, children }: PropTypes) => {
//     const mapState = useCallback(
//         createSelector(makeSelectLocale(), locale => ({
//             locale,
//         })),
//         []
//     )
//     // const dispatch = useDispatch();
    
//     const { locale } = useMappedState(mapState);

//     return (
//         <IntlProvider
//             locale={locale}
//             key={locale}
//             messages={messages[locale]}
//         >
//             {React.Children.only(children)}
//         </IntlProvider>
//     )
// }
export class LanguageProvider extends React.PureComponent<PropTypes> {
    // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <IntlProvider
                locale={this.props.locale}
                key={this.props.locale}
                messages={this.props.messages[this.props.locale]}
            >
                {React.Children.only(this.props.children)}
            </IntlProvider>
        );
    }
}

// LanguageProvider.propTypes = {
//     locale: PropTypes.string,
//     messages: PropTypes.object,
//     children: PropTypes.element.isRequired,
// };

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
    locale,
}));

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}
// export default LanguageProvider;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguageProvider);

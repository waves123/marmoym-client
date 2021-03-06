import * as Immutable from 'immutable';

import ActionType from '@constants/ActionType';
import Definition from '@src/models/Definition';
import Term from '@src/models/Term';

const _terms = {
  1: {
    id: '1',
    label: '김민섭',
    roman: 'gimminseb',
    updatedAt: 9999999999999,
  },
};

const _definitions = {
  1: {
    created_at: 9,
    id: 21,
    label: '라벨라벨',
    origins: [
      '아프리카 철구 방송',
    ],
    poss: [
      '명사', '표현',
    ],
    term_id: 0,
    updated_at: 0,
    usages: [{
      id: 999,
      label: '용례 용례',
    }],
    user_id: 0,
  },
  21: {
    created_at: 9,
    id: 21,
    label: '실화니?의 뜻',
    origins: [
      '아프리카 철구 방송',
    ],
    poss: [
      '명사', '표현',
    ],
    term_id: 0,
    updated_at: 0,
    usages: [{
      id: 999,
      label: '민수 차 산거 실화니?',
    }],
    user_id: 0,
  },
};

const initialState = {
  definitions: Definition.ofMany(_definitions),
  toFetch: [],
  inDisplay: Immutable.List(),
  renderRequested: [],
  terms: Term.ofMany(_terms),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DEFINITION_IDS_SUCCESS:
      return getDefinitionIdsDidSucceed(state, action);
    case ActionType.GET_DEFINITIONS_SUCCESS:
      return getDefinitionsDidSucceed(state, action);
    case ActionType.ADD_DEFINITION:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.ADD_DEFINITION_SUCCESS:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.REMOVE_DEFINITION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

/**
 * ...
 */
function getDefinitionIdsDidSucceed(state, action) {
  const { defIds } = action.payload;
  const toFetch = [];
  let renderRequested = [];
  // todo Refactor needed
  Object.keys(defIds).forEach((defKey) => {
    const definition = state.definitions.get(defKey);
    if (definition && definition.get('updated_at') >= defIds.defKey) {
      //
    } else {
      toFetch.push(parseInt(defKey));
    }
    renderRequested.push(parseInt(defKey));
  });

  return {
    ...state,
    toFetch,
    renderRequested,
  };
}

/**
 * ...
 */
function getDefinitionsDidSucceed(state, action) {
  const { terms, definitions } = action.payload;

  return {
    ...state,
    definitions: Definition.hardMerge(definitions).into(state.definitions),
    toFetch: [],
    inDisplay: Immutable.List(state.renderRequested),
    renderRequested: [],
    terms: Term.hardMerge(terms).into(state.terms),  // todo implement softMerge needed
  };
}

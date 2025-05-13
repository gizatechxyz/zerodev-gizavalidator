# ZeroDev Giza Validator

A validator plugin for ZeroDev that integrates with Giza.

## Installation

```bash
pnpm add zerodev-gizavalidator
```

## Usage

```typescript
import { signerToGizaValidator, getValidatorAddress } from 'zerodev-gizavalidator';


// Create a Giza validator
const validator = await signerToGizaValidator(signer);

// Get the validator address
const validatorAddress = await getValidatorAddress(validator);
```

## API

### `signerToGizaValidator(signer: SmartAccountSigner)`

Creates a Giza validator instance from a signer.

### `getValidatorAddress(validator: KernelValidator)`

Returns the address of the validator.

## License

ISC 